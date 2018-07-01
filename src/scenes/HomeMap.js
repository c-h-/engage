import React from "react";
import { Text, View, Platform } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/primitives";
import throttle from "lodash.throttle";
import MapView from "../components/MapView";
import Button from "../components/Button";
import Container from "../components/Container";
import Bar from "../components/Bar";
import { colors } from "../theme";
import { setMapLocation, getBirdData, apiEndpoints } from "../redux/actions";

const { Marker, Polygon } = MapView;
const platform = Platform.OS;

const LocateMe = styled.View`
  background-color: ${colors.textInverted};
  border-radius: 15;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

const OuterCircle = styled.View`
  background-color: ${colors.primary};
  border-radius: 40;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: center;
`;

const InnerCircle = styled.View`
  background-color: ${colors.textInverted};
  border-radius: 35;
  height: 70px;
  width: 70px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${colors.textSoft};
`;

const Spacer = styled.View`
  height: 30px;
  width: 30px;
  opacity: 0;
`;

const initialRegion = {
  latitude: 34.008338,
  longitude: -118.481099,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

class HomeMap extends React.Component {
  /**
   * Helper method renders shapes for map
   * @param {Array} shapeData - array of shapes to render from Bird API
   */
  static renderPolygons(shapeData) {
    const renderedShapes = [];
    // Polygon not supported on web yet (react-native-web-map-view)
    if (Polygon && Array.isArray(shapeData)) {
      shapeData.map(shape => {
        if (
          shape &&
          shape.region &&
          shape.region.rings &&
          shape.region.rings[0] &&
          shape.region.rings[0].points
        )
          renderedShapes.push(
            <Polygon
              coordinates={shape.region.rings[0].points}
              strokeColor="red"
              fillColor="#e55039"
              key={shape.id}
            />
          );
      });
    }
    return renderedShapes;
  }

  /**
   * Helper method renders pins for Bird scooters on map
   * @param {Array} pinData - array of pin objects from Bird API
   */
  static renderBirds(pinData) {
    const renderedPins = [];
    if (Marker && Array.isArray(pinData)) {
      pinData.map(pin => {
        if (pin && pin.location) {
          renderedPins.push(
            <Marker
              coordinate={pin.location}
              title={`Bird - ${pin.battery_level}% Battery`}
              key={pin.id}
            />
          );
        }
      });
    }
    return renderedPins;
  }

  /**
   * On mount, refresh data and set up throttled region persistence
   */
  componentDidMount() {
    this.refreshData();
    this.throttledRegionPersist = throttle(this.persistRegionChange, 3000, {
      trailing: true
    });
  }

  /**
   * Refresh applicable map data to ensure we're fresh
   */
  refreshData = () => {
    const { dispatch } = this.props;
    dispatch(getBirdData(apiEndpoints.areaNearby));
    dispatch(getBirdData(apiEndpoints.birdNearby));
  };

  /**
   * Navigate onward
   */
  onPress = () => {
    const { navigate } = this.props.navigation;
    navigate("GetLocation");
  };

  /**
   * When the map region changes, persist the new location, but throttle persistence calls
   */
  onRegionChange = region => {
    this.throttledRegionPersist(region);
  };

  /**
   * Store selected region in redux state
   */
  persistRegionChange = region => {
    const { dispatch } = this.props;
    dispatch(setMapLocation(region));
  };

  render() {
    const { areaNearby, birdNearby } = this.props.data;

    // web doesn't support initialRegion
    const regionPropName = platform === "web" ? "region" : "initialRegion";
    const mapViewMoreProps = { [regionPropName]: initialRegion };

    return (
      <Container>
        <Button>How to Ride</Button>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            onRegionChange={this.onRegionChange}
            {...mapViewMoreProps}
          >
            {HomeMap.renderBirds(birdNearby.data.birds)}
            {HomeMap.renderPolygons(areaNearby)}
          </MapView>
          <Bar position={"bottom"}>
            <LocateMe>
              <Text>X</Text>
            </LocateMe>
            <OuterCircle>
              <InnerCircle>
                <ButtonText>RIDE</ButtonText>
              </InnerCircle>
            </OuterCircle>
            <Spacer />
          </Bar>
        </View>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    data: state.birdCurrent || {}
  };
}
export default connect(mapStateToProps)(HomeMap);

import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/primitives";
import MapView from "../components/MapView";
import Button from "../components/Button";
import Container from "../components/Container";
import Bar from "../components/Bar";
import { colors } from "../theme";
import Bird from "../network/Bird";

const { Marker, Polygon } = MapView;

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

export default class HomeMap extends React.Component {
  static renderPolygons(shapeData) {
    const renderedShapes = [];
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
  onPress = () => {
    const { navigate } = this.props.navigation;
    navigate("GetLocation");
  };
  render() {
    console.log("Bird response", Bird.exampleResponses);
    return (
      <Container>
        <Button>How to Ride</Button>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            region={{
              latitude: 34.008338,
              longitude: -118.481099,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              coordinate={{ latitude: 34.008338, longitude: -118.481099 }}
              title="Bird Scooter - 51% Battery"
            />
            {HomeMap.renderPolygons(Bird.exampleResponses[0])}
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

import renderer from "react-test-renderer";
import VehicleList from "./VehicleList";
it("changes the class when hovered", () => {
  const component = renderer.create(VehicleList);
  console.log(component);
});

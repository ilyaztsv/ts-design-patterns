import { SimpleFactoryPattern } from "./simple-factory";

namespace SimpleFactoryPatternDemo {
  const button = SimpleFactoryPattern.ButtonFactory.createButton(
    "text",
    100,
    40
  );
}

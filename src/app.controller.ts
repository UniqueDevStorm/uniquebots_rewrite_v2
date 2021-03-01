import { Controller, Get, Render } from "@nestjs/common"

@Controller()
export class AppController {
  @Get()
  @Render("Index")
  public index() {}

  @Render("about")
  @Get("/about")
  public about() {
    return {}
  }
}

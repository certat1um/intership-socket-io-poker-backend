import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getUserRoom/:userID')
  async handleUserRoom(@Param() params: {userID: string}): Promise<string | null> {
    return this.userService.getRoomIDByUserID(params.userID);
  }

  @Post('new-user')
  async handleCreatingUser(@Body() body: { username: string }) {
    return this.userService.create(body.username);
  }
}

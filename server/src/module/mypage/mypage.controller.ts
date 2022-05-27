import {
  Body,
  Controller,
  Delete,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PasswordCheckDto } from './dto/passwordCheck.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MypageService } from './mypage.service';

@Controller('mypage')
@UseGuards(AuthGuard())
export class MypageController {
  constructor(private mypage: MypageService) {}
  // 회원정보 수정
  @Patch('/update')
  updateUser(
    @Req() req: any,
    @Body() updateUser: UpdateUserDto,
  ): Promise<object> {
    //console.log(req, 'req');
    const { user } = req;
    //console.log(user);
    return this.mypage.updateUserInfo(updateUser, user);
  }

  //회원탈퇴
  @Delete('/withdrawl')
  deleteUser(
    @Req() req: any,
    @Body() passwordDto: PasswordCheckDto,
  ): Promise<object> {
    const { user } = req;
    /* console.log(user, 'user');
    console.log(passwordDto); */
    return this.mypage.removeUserInfo(user, passwordDto);
  }
}

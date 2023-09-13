import {Field, ObjectType} from '@nestjs/graphql'
import {User} from 'src/user/user.type'


//It will convert this typescript code into a praphql schema

@ObjectType()
export class RegisterResponse {
    @Field(() => UserActivation, {nullable: true})
    user?: User;
}
@ObjectType()
export class LoginResponse {
    @Field(() => User)
    user: User;
}
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('clientes')
export class ClientsController {

    @Post(':id/transacoes')
    async transacoes(@Param() params: number, @Body() body: any){
        return await '';
    }

}

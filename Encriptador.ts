import {Md5} from 'ts-md5/dist/md5';

const SALT = "@@@###"

export class Encriptador
{
    encrypt(password:string)
    {
        return Md5.hashStr(SALT + password)
    }
}
import { Inject, Injectable } from "@nestjs/common";
import { CONFIG_OPTIONS } from "src/constants";
import { IConfigOpption } from "./interfaces/config-opptions.interface";
import path from "path";
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService{
  private readonly config = { };
  get(key: string) {
    return this.config[key];
  }
}
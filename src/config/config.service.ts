import { Inject, Injectable } from "@nestjs/common";
import { CONFIG_OPTIONS } from "src/constants";
import { IConfigOpption } from "./interfaces/config-opptions.interface";
import path from "path";
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { IEnvConfig } from "./interfaces/env-config.interface";

@Injectable()
export class ConfigService{
    private readonly envConfig : IEnvConfig;

    get(key: string): string {
        return this.envConfig[key];
      }
}
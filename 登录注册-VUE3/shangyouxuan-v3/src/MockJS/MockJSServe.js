import Mock from "mockjs";
import data from "./data.json";
Mock.mock("/mock/impdata", { code: 200, data });

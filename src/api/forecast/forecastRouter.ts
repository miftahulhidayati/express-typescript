import express, { type Router } from "express";
import { ForecastController } from "./forecastController";
import { MockedForecast } from "./mocked-forecast/mocked-forecast";

const forecastService = new MockedForecast();
const forecastController = new ForecastController(forecastService);

export const forecastRouter: Router = express.Router();
forecastRouter.get("/today", (req, res) => forecastController.today(req, res));
forecastRouter.post("/next-days", (req, res) => forecastController.nextDays(req, res));
forecastRouter.get("/history", (req, res) => forecastController.history(req, res));

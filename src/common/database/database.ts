
import { ForecastResult } from "@/api/forecast/forecastService";

interface Database {
    forecast: ForecastResult[];
}

export const database: Database = {
    forecast: [],
};

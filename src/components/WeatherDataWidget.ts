import { Widget } from './Widget';
import { DataService } from '../services/DataService';
import { WeatherData } from '../types/DataTypes';

class WeatherDataWidget extends Widget {
  private dataService: DataService;

  constructor(dataService: DataService) {
    super();
    this.dataService = dataService;
    this.render();
  }

  async fetchWeatherData(): Promise<WeatherData> {
    const data = await this.dataService.getWeatherData();
    return data;
  }

  render(): void {
    this.fetchWeatherData().then(data => {
      console.log('Weather Data:', data);
      // Add logic to render data in widget
    });
  }
}

export default WeatherDataWidget;
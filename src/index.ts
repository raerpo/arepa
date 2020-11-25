import { arepas, Arepa } from './data';

type RandomArepaOptions = {
  origin: Arepa['origin']
}

/**
 * @description returns a random arepa
 */
export const getRandomArepa = (options?: RandomArepaOptions): Arepa => {
  const availableArepas = options?.origin ? arepas.filter(arepa => arepa.origin === options.origin) : arepas;
  return availableArepas[Math.floor(Math.random() * availableArepas.length)]
}
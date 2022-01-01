export interface Route {
  attributes: {
    direction_destinations: string[],
    direction_names: string[],
    long_name: string,
    type: number
  },
  id: string,
}

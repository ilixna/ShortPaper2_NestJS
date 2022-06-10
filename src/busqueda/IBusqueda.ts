export interface IBusqueda<T, N> {
  busquedaFiltrada(filtro: T): N;
  busqueda(): N;
}

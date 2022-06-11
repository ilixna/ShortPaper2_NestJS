export interface IBusqueda<T, N> {
  busquedaFiltrada(filtro: T): Promise<N[]>;
  busqueda(): Promise<N[]>;
}

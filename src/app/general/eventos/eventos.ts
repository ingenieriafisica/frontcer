export interface Eventos {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id:         number;
  attributes: Attributes;
}

export interface Attributes {
  Titulo:      string;
  uid:         null;
  cuerpo:      Cuerpo[];
  fecha:       Date;
  publicado:   boolean;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
}

export interface Cuerpo {
  type:     string;
  children: Child[];
}

export interface Child {
  text: string;
  type: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}

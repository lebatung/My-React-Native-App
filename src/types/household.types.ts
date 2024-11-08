export interface PaginationData {
  total: number;
  page: number;
  pages: number;
  per_page: number;
}

export interface HouseholdItem {
  value: string;
  code: string;
  display: string;
  soCCCD: string;
  soDienThoai: string;
  email: string;
  loaiHoGD: number;
  soGiayTo: string;
  soNhaTT: string;
  diaChiCuTheTT: string;
  trangThai: boolean;
  ghiChu: string;
  ngayCap: string;
  ngaySinh: string;
  thon: string;
  xa: string;
  huyen: string;
  tinh: string;
  trangThaiText: string;
  tenLoaiHo: string;
  noiCap: string;
  gioiTinh: string;
  danToc: string;
  tonGiao: string;
  quocTich: string;
  chuHoID: string;
}

export interface HouseholdApiResponse {
  message: string;
  data: HouseholdItem[];
  pagination: PaginationData;
}

export interface HouseholdSearchParams {
   page: number;
   per_page: number;
} 
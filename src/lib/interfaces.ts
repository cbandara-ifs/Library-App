import { AxiosInstance } from "axios";

export interface Book {
  id: number;
  title: string;
  category: string;
  slug?: string | null;
  authorId: number;
  authorName?: string | null;
};

export interface BookListProps {
  books: Book[];
  onDeleteClick: (book: Book) => void;
}

export interface BookFormProps {
  book: Book;
  authors: Author[];
  onSave: (event: React.FormEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  saving?: boolean;
  errors?: { [key: string]: string };
}

export interface Author {
  id : number;
  firstName : string
};

export interface AuthorMap {
  [id: number]: string;
};

export interface HttpClient {
  default: AxiosInstance
};

export interface SelectInputProps {
  name: string;
  label: string;
  onSave?: (event: React.FormEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  defaultOption : string;
  value : string | number;
  options: { value: string | number; text: string }[];
  error: string;
};

export interface TextInputProps {
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  placeholder? : string;
  value : string | number;
  error: string;
};

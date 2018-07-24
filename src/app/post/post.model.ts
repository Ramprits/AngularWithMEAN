export class PostModel {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public image: string,
    public createdDate: Date
  ) {}
}
// Generated by https://quicktype.io

export interface Post {
  id?: string;
  title: string;
  body: string;
}

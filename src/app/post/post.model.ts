export class PostModel {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public image: string,
    public createdDate: Date
  ) {}
}

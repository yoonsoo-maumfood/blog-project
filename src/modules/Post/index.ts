
export enum DataStatus {
  Done,
  Processing,
  Failed,
}

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];

  constructor({
    userId,
    id,
    title,
    body,
  }: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
    this.comments = [];
  }
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

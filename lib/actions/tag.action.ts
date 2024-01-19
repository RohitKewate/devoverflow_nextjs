"use server";

import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import User from "@/database/user.model";

export default async function getTopInteractedTag(
  params: GetTopInteractedTagsParams
) {
  try {
    await connectToDatabase();
    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return [
      { _id: "123", name: "react" },
      { _id: "124", name: "django" },
      { _id: "125", name: "python" },
    ];
  } catch (error) {
    console.log(error);
    throw new Error("Tag not defined");
  }
}


export async function getAllTags(params: GetAllTagsParams) {
    try {
      await connectToDatabase();
  
      const tags = await Tag.find({})
  
      return {tags};
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
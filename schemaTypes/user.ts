import { defineField } from "sanity";

export const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check if the user is an admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      // readOnly:true,
      // hidden:true
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The user's name",
      readOnly: true,
      // hidden:true
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "emailVerified",
      type: "datetime",
      hidden:true
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "The user's brief description",
    }),
  ],
};
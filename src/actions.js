import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatePerson = {
    name: formData.get(`name`),
    image: formData.get(`image`),
    title: formData.get(`title`),
  };

  console.log("updatePerson", updatePerson);

  await fetch(`${URL}/people/${params.id}`, {
    method: "put",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(updatePerson),
  });
  return redirect("/");
};

export const createAction = async ({ request }) => {
  const formData = await request.formData(); //the request object has data for forms. We can access it.
  const createdPerson = {
    name: formData.get("name"), //we can get the value of each form field by using the .get(<value of name ('name') property on the input>)
    image: formData.get("image"), //we can get the value of each form field by using the .get(<value of name ('image') property on the input>)
    title: formData.get("title"), //we can get the value of each form field by using the .get(<value of name('title')  property on the input>)
  };

  await fetch(`${URL}/people`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdPerson),
  });

  return redirect("/");
};

//added this new deleteAction funciton
export const deleteAction = async ({ params }) => {
  await fetch(`${URL}/people/${params.id}`, {
    method: "delete",
  });

  return redirect("/");
};

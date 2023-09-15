import { Request, Response } from "express";
import Person from "../model/person";
import { Types as mongooseTypes } from "mongoose";

async function findPersonByField(field: string, value: string) {
  if (field === "name") {
    return Person.findOne({ name: value }).exec();
  } else if (field === "userId") {
    return Person.findById(value).exec();
  }
  return null;
}

const personController = {
  async createPerson(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const person = await Person.create({ name });
      res.status(200).json({ message: person });
    } catch (error: any) {
      res.status(500).json({ error: "Server error", msg: error.message });
    }
  },

  async getPerson(req: Request, res: Response) {
    try {
      const { param } = req.params;
      const [key, value] = param.split("=");

      const person = await findPersonByField(key, value);

      if (!person) {
        return res.status(404).json({ error: "Person not found" });
      }

      res.json(person);
    } catch (error) {
      res.status(500).json({ error: "Server error", msg: error });
    }
  },
  async updatePerson(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { name } = req.body;
      const person = await Person.findByIdAndUpdate(
        userId,
        { name },
        { new: true }
      );
      if (!person) {
        return res.status(404).json({ error: "Person not found" });
      }
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },

  async deletePerson(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const objectIdUserId = new mongooseTypes.ObjectId(userId);
      const deletePerson = await Person.findByIdAndDelete(objectIdUserId);
      if (!deletePerson) {
        return res.status(404).json({ message: "Person not found" });
      }
      return res.json({ message: "Person deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  },
};

export default personController;

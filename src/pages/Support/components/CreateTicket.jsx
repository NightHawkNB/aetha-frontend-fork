import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import ImageUpload from "../../../components/common/ImageUpload";
import FileUpload from "../../../components/FileUpload";

function CreateTicket({
  createTicket,
  clearAll,
  setTitle,
  setCategory,
  setDescription,
  setFiles,
  title,
  category,
  description,
  files
}) {
  return (
    <form
      onSubmit={createTicket}
      className="flex flex-col gap-4 w-full items-center"
    >
      <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
        <Input
          isRequired
          key="title"
          type="text"
          label="Title"
          size="md"
          labelPlacement="outside"
          placeholder="Short Title"
          className="min-w-[200px] max-w-[400px] lg:min-w-[400px] border-2 border-gray-300 rounded-xl"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <Select
          isRequired
          size="md"
          label="Category"
          placeholder="Select a category"
          labelPlacement="outside"
          className="min-w-[200px] max-w-[400px] lg:min-w-[400px] border-2 border-gray-300 rounded-xl"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <SelectItem key="default" isDisabled>
            Select Category
          </SelectItem>
          <SelectItem key="complaint">Complaint</SelectItem>
          <SelectItem key="needAssistance">Need Assistance</SelectItem>
          <SelectItem key="bug">Bug</SelectItem>
        </Select>
      </div>

      <div className="flex items-center justify-evenly flex-wrap gap-4 w-full">
        <Textarea
          isRequired
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="min-w-[290px] w-full max-w-[420px] lg:min-w-[820px] border-2 border-gray-300 rounded-xl p-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="flex items-center justify-evenly flex-wrap gap-4">
        <ImageUpload files={files} setFiles={setFiles} />
      </div>

      <div className="flex items-center justify-evenly flex-wrap gap-4">
        <Button type="submit" color="primary" variant="flat">
          Create Ticket
        </Button>
        <Button type="button" onClick={clearAll} color="danger" variant="flat">
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default CreateTicket;

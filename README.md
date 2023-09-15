---

# `personController` Module Documentation

## Description

The `personController` module provides functions to handle CRUD operations for the "person" resource in the REST API. It includes functions for creating, retrieving, updating, and deleting person records.

## Functions

### `createPerson(req: Request, res: Response)`

Creates a new person record based on the provided request data.

#### Parameters

- `req` (Request): Express request object containing the person data.
- `res` (Response): Express response object.

#### Returns

- Status code and a JSON response indicating success or error.

### `getPerson(req: Request, res: Response)`

Retrieves details of a person by their ID.

#### Parameters

- `req` (Request): Express request object containing the person ID.
- `res` (Response): Express response object.

#### Returns

- Status code and a JSON response containing the person details or an error message if the person is not found.

### `updatePerson(req: Request, res: Response)`

Updates the details of an existing person record by their ID.

#### Parameters

- `req` (Request): Express request object containing the person ID and updated data.
- `res` (Response): Express response object.

#### Returns

- Status code and a JSON response containing the updated person details or an error message if the person is not found.

### `deletePerson(req: Request, res: Response)`

Deletes a person record by their ID.

#### Parameters

- `req` (Request): Express request object containing the person ID.
- `res` (Response): Express response object.

#### Returns

- Status code and a JSON response indicating success or an error message if the person is not found.

## Test Cases

### `createPerson` Test Cases

- **Scenario 1:** Successfully create a new person record.

  Test Case:
  ```javascript
  it("should create a person", async () => {
    // Implement test logic here
  });
  ```

- **Scenario 2:** Handle server error during person creation.

  Test Case:
  ```javascript
  it("should handle server error", async () => {
    // Implement test logic here
  });
  ```

### `getPerson` Test Cases

- **Scenario 1:** Successfully retrieve a person by ID.

  Test Case:
  ```javascript
  it("should get a person by ID", async () => {
    // Implement test logic here
  });
  ```

- **Scenario 2:** Handle person not found.

  Test Case:
  ```javascript
  it("should handle person not found", async () => {
    // Implement test logic here
  });
  ```

### `updatePerson` Test Cases

- **Scenario 1:** Successfully update a person by ID.

  Test Case:
  ```javascript
  it("should update a person by ID", async () => {
    // Implement test logic here
  });
  ```

- **Scenario 2:** Handle person not found during update.

  Test Case:
  ```javascript
  it("should handle person not found during update", async () => {
    // Implement test logic here
  });
  ```

### `deletePerson` Test Cases

- **Scenario 1:** Successfully delete a person by ID.

  Test Case:
  ```javascript
  it("should delete a person by ID", async () => {
    // Implement test logic here
  });
  ```

- **Scenario 2:** Handle person not found during deletion.

  Test Case:
  ```javascript
  it("should handle person not found during deletion", async () => {
    // Implement test logic here
  });
  ```

---

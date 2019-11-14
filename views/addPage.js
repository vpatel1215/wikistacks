const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
    <div class="form-group">
      <div>
      <label for="name" class="col-sm-2 control-label">Name</label>
      <div class="col-sm-10">
        <input id="name" name="name" type="text" class="form-control" />
      </div>
      </div>

      <div>
      <label for="Author-Email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="Author-Email" name="Author-Email" type="text" class="form-control" />
      </div>
      </div>

        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div>
      <label for="content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <input id="content" name="content" type="textarea" class="form-control" />
      </div>
      </div>

      <div>
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <select id="status" name="status" type="text" class="form-control" />
        <option value="">--Please choose an option--</option>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
    </select>
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);

const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    // try {
      const response = await this.model.create(data);
      return response;
    // } catch (error) {
    //   Logger.error("Something went wrong from CRUD Repo : create");
    //   throw error;
    // }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong from CRUD Repo : destroy");
      throw error;
    }
  }

  /**
   *
   * @param {primary key Id} data
   * @returns
   */
  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      Logger.error("Something went wrong from CRUD Repo : get");
      throw error;
    }
  }


  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong from CRUD Repo : getAll");
      throw error;
    }
  }

  async update(id, data) {
    //data is object {col: value}
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong from CRUD Repo : update");
      throw error;
    }
  }
}

module.exports = { CrudRepository };

import Category from "../model/Category";
import errorResponse from "../utils/errorResponse";
import SuccessResponse from "../utils/SuccessResponse";

class CategoryController {
  static async createCategory(req, res) {
    const category = await Category.create(req.body);
    if (!category) {
      return errorResponse(res, 401, `category not created`);
    } else {
      return SuccessResponse(res, 201, `success created`, category);
    }
  }
  static async getAllCategory(req, res) {
    const category = await Category.find();
    if (!category) {
      return errorResponse(res, 401, `category not found`);
    } else {
      return SuccessResponse(res, 200, `success found`, category);
    }
  }
}
export default CategoryController;
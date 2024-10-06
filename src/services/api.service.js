import instance from "@/config/axios";

const getMenus = async () => {
  try {
    const response = await instance.get(
      "dataset=menus_des_restaurants_scolaires"
    );
    return response.data;
  } catch (error) {
    console.log(`Erreur lors du chargeemnt des menus : ${error}`);
    throw error;
  }
};

export { getMenus };

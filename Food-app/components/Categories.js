import { ScrollView } from "react-native";
import React from "react";

import CategoryCard from "./CategoryCard";

//categories images
import categoryOne from "../assets/categories1.jpg";
import categoryTwo from "../assets/categoriesBurritos.jpg";
import categoryThree from "../assets/categoriesPizza.jpg";
import categoryFour from "../assets/categoriesCold.jpg";
import categoryFive from "../assets/categoriesAsia.jpg";
import categorySix from "../assets/categoriesDesert.jpg";

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard localImage={categoryOne} title="Hamburgers" />
            <CategoryCard localImage={categoryTwo} title="Burritos" />
            <CategoryCard localImage={categoryThree} title="Pizzas" />
            <CategoryCard localImage={categoryFour} title="Cold" />
            <CategoryCard localImage={categoryFive} title="Asia" />
            <CategoryCard localImage={categorySix} title="Desert" />
        </ScrollView>
    );
}

export default Categories;
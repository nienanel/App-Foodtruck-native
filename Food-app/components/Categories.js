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

const Categories = ({ onSelectCategory }) => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard localImage={categoryOne} title="burger" onSelectCategory={onSelectCategory} />
            <CategoryCard localImage={categoryTwo} title="burritos" onSelectCategory={onSelectCategory} />
            <CategoryCard localImage={categoryThree} title="pizzas" onSelectCategory={onSelectCategory} />
            <CategoryCard localImage={categoryFour} title="cold" onSelectCategory={onSelectCategory} />
            <CategoryCard localImage={categoryFive} title="asia" onSelectCategory={onSelectCategory} />
            <CategoryCard localImage={categorySix} title="desert" onSelectCategory={onSelectCategory} />
        </ScrollView>
    );
}

export default Categories;
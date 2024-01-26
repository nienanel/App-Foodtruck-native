import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import FoodTrucksCards from './FoodTrucksCards';
import { colors } from '../constants/colors';

const FeaturedRow = ({ title, description }) => {
    return (
        <View style={styles.featuredContainer}>
            <View className="mt-4 flex-row items-center justify-between px-5">
                <Text style={styles.textRow}>{title}</Text>
                <AntDesign name="arrowright" size={20} color={colors.secondary} />
            </View>

            <Text className="text-xs text-gray-500 px-5 mt-2">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                <FoodTrucksCards
                    id={1}
                    imgUrl="https://restauracionnews.com/wp-content/uploads/2022/10/GROSSO_VIVE-LATINO_JULIAN-FALLAS-1.jpg"
                    title="grosso napolitano"
                    rating={4.2}
                    short_description="pizza italiana"
                    style="Pizza"
                    long={20}
                    lat={0}
                />
                <FoodTrucksCards
                    id={2}
                    imgUrl="data:image/jpeg;base64,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"
                    title="Lo de ramon"
                    rating={4.5}
                    short_description="tacos y enchiladas"
                    style="mexicana"
                    long={20}
                    lat={0}
                />
                <FoodTrucksCards
                    id={3}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Sushi area"
                    rating={4.5}
                    short_description="Sushi fusion peru"
                    style="Sushi"
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

const styles = StyleSheet.create({
    featuredContainer: {
        backgroundColor: colors.primary,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
    },
    textRow: {
        fontSize: 20,
        fontFamily: 'UrbanistBold',
        color: "black",
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
    }    
})
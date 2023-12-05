import React from 'react'
import { ScrollView } from 'react-native'

import Categories from './Categories'

export default function CategoriesNav() {

    return (
        <ScrollView className="bg-red-400"
            contentContainerStyle={{
                paddingBottom: 30,
            }}
        >
            <Categories />
        </ScrollView>
    );
};

// src/screens/BerandaScreen.js
import React from 'react';
import { Box, Text, ScrollView, VStack, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { kendaraan } from '../data/kendaraan';
import KendaraanCard from '../components/KendaraanCard';

const BerandaScreen = ({ navigation }) => {
  return (
    <ScrollView bg="white">
      <VStack space={4} p={4}>
        {/* Header Section */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Vehicle Rental
          </Text>
          <Text fontSize="sm" color="gray.500">
            Find and rent your vehicle here
          </Text>
        </Box>

        {/* Search Bar */}
        <Input
          placeholder="Search vehicles..."
          variant="filled"
          width="100%"
          borderRadius="10"
          py="3"
          px="2"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />

        {/* Vehicle List */}
        <VStack space={3}>
          {kendaraan.map((item) => (
            <KendaraanCard
              key={item.id}
              kendaraan={item}
              onPress={() => navigation.navigate('Detail', { kendaraan: item })}
            />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default BerandaScreen;
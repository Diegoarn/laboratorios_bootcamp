export const mapPropertyToApi = (property) => {
  return {
    title: property.title,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    price: property.price,
    saleTypes: property.saleTypes,
    address: property.address,
    city: property.city,
    provinceId: property.provinceId,
    squareMeter: property.squareMeter,
    rooms: property.rooms,
    bathrooms: property.bathrooms,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipmentIds: property.equipmentIds,
    images: property.images,
  };
};

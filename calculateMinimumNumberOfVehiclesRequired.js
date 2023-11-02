const vehicles = [
  { type: true, weightCapacity: 1 },
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
];

const parcels = [
  { location: 'velachery', weight: 1000 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
];

function calculateMinimumNumberOfVehiclesRequired(vehicles, parcels) {

  parcels.forEach(parcel => {
    let remainingWeight = parcel.weight;
    let vehicleString = '';
    
   
    if (isNaN(remainingWeight) || remainingWeight <= 0) {
      console.log('Invalid weight');
      return;
    }

    vehicles.sort((a, b) => b.weightCapacity - a.weightCapacity).forEach(vehicle => {

      const count = Math.floor(remainingWeight / vehicle.weightCapacity);
      if (count > 0) {
        vehicleString += (vehicleString === '' ? '' : ' + ') + (count > 1 ? `${count}(${vehicle.type})` : vehicle.type);
        remainingWeight %= vehicle.weightCapacity;
      }
    });

    parcel.vehiclesRequired = vehicleString;

  });

}

calculateMinimumNumberOfVehiclesRequired(vehicles, parcels);

parcels.forEach(parcel => {
  if (parcel.vehiclesRequired !== undefined) {
    console.log(`To deliver to ${parcel.location}, you need: ${parcel.vehiclesRequired} = ${parcel.weight}`);
  }
});

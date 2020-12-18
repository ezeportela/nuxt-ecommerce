const Product = require('../models/Product');
const AbstractRepository = require('./AbstractRepository');

class ProductRepository extends AbstractRepository {
  getModel() {
    return Product;
  }

  newModel(data) {
    return new Product(data);
  }
}

module.exports = ProductRepository;

// exports.show = async (req, res) => {
//   try {
//     let store = await Store.findOne({ user: req.user._id });
//     res.send(store).status(200);
//   } catch (err) {
//     console.log(err);
//     res.status(404).send(err);
//     return;
//   }
// };

// exports.getDefaultCarrier = async (req, res) => {
//   try {
//     const store = await Store.findOne({ user: req.user._id }).exec();
//     const url = store.vtexStoreUrl;
//     const key = store.vtexApiKey;
//     const token = store.vtexApiToken;
//     if(!url || !key || !token) throw new Error('Missing data')
//     const response = await VtexServices.getDefaultCarrier(
//       url,
//       process.env.CARRIER,
//       key,
//       token
//     );
//     await sleep(2500);
//     if (response.data) {
//       res.status(200).send({ ...response.data, chazkiAsDefaultCarrier: true });
//     } else {
//       console.log(`Registering Chazki as a carrier`);
//       await VtexServices.registerAsCarrier(
//         store.vtexStoreUrl,
//         store.vtexApiKey,
//         store.vtexApiToken
//       )
//         .then((response) => {
//           if (response.status === 200) {
//             console.log("Chazki was registered as carrier sucessfully");
//           }
//         })
//         .catch((error) => {
//           console.log("Chazki was not registred as carrier");
//           console.log(error);
//           throw "Error on get default carrier";
//         });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     let store = await Store.findOneAndUpdate({ _id: req.store._id }, req.body);
//     //console.log(`Next..`);
//     if (store.vtexApiKey && store.vtexApiToken && store.vtexStoreUrl) {
//       console.log(`Configuring new hook...`);
//       await VtexServices.configureNewHook(
//         store.vtexStoreUrl,
//         store._id,
//         store.vtexApiKey,
//         store.vtexApiToken
//       )
//         .then((response) => {
//           if (response.data) {
//             console.log("Hook was configured succesfully");
//             console.log(response.data);
//           }
//         })
//         .catch((error) => {
//           console.log("Hook was not configured");
//           console.log(error);
//         });
//     }
//     // Response
//     res.send(store).status(200);
//   } catch (err) {
//     console.log(err);
//     res.status(401).send(err);
//     return;
//   }
// };

// exports.delete = async (req, res) => {
//   console.log("Delete Store " + req.params.id);
//   try {
//     const store = await Store.findById(req.params.id);
//     const orders = await Order.find({ store: store._id });
//     for (const order of orders) {
//       await Notification.deleteMany({ order: order._id });
//     }
//     await Order.deleteMany({ store: store._id });
//     await Store.deleteOne({ _id: store._id });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send(err);
//   }
//   return res.status(200).send("elo");
// };

// exports.ordersList = async (req, res) => {
//   try {
//     const store = await Store.findById(req.params.id).exec();
//   } catch (err) {
//     res.status(404).send(err);
//     return;
//   }

//   try {
//     const orders = await Order.find({ store: store._id }).exec();
//   } catch (err) {
//     res.status(500).send(err);
//     return;
//   }
// };

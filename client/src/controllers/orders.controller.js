import axios from "axios";

const ordersController = create((set) => ({
    orders: null,

    createForm: {
    method:"",
    size:"",
    crust:"",
    qty:"",
    toppings:""
    },



    fetchOrders: async () => {
    // Fetch the orders
    const res = await axios.get("http://localhost:3000/api/orders");

    // Set to state
    set({ orders: res.data.orders });
    },

    updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
        return {
        createForm: {
            ...state.createForm,
            [name]: value,
        },
        };
    });
    },

    createOrder: async (e) => {
    e.preventDefault();

    const { createForm, orders } = ordersStore.getState();
    const res = await axios.post("http://localhost:3000/api/orders", createForm);

    set({
        orders: [...orders, res.data.order],
        createForm: {
        method:"",
        size:"",
        crust:"",
        qty:"",
        toppings:""
        },
    });
    },



    handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
        return {
        updateForm: {
            ...state.updateForm,
            [name]: value,
        },
        };
    });
    },

  toggleUpdate: ({ _id, title, body }) => {
    set({
      updateForm: {
        title,
        body,
        _id,
      },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const {
      updateForm: { title, body, _id },
      notes,
    } = notesStore.getState();

    // Send the update request
    const res = await axios.put(`http://localhost:3000/notes/${_id}`, {
      title,
      body,
    });

    // Update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: {
        _id: null,
        title: "",
        body: "",
      },
    });
  },
}));

export default ordersController;
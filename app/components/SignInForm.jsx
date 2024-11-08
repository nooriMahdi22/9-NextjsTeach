'use client'
import { useState } from 'react'
import axios from 'axios'

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(formData)

    // try {
    //   const response = await axios.post('https://example.com/api/signin', formData)
    //   console.log(response.data) // Handle success response
    //   // Optionally reset form or show success message
    //   setFormData({ email: '', name: '', phoneNumber: '' })
    // } catch (error) {
    //   console.error('Error submitting form:', error) // Handle error response
    // }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md  w-full px-5 py-8 border rounded-xl  shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center ">Sign In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  )
}

export default SignInForm

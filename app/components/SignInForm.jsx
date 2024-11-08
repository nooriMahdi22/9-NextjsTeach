'use client'
import { useState } from 'react'
import axios from 'axios'
import { changeToEngNum } from './Help'

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidPhone = (str) => /^09(0[1-3]|1[0-9]|2[0-2]|3[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}$/.test(str)

const fieldsToValidate = ['email', 'phoneNumber']

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (isSubmitted && fieldsToValidate.includes(name)) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const validateField = (fieldName, value) => {
    if (!fieldsToValidate.includes(fieldName)) return ''

    let error = ''
    if (!value.trim()) {
      error = 'این فیلد نمی‌تواند خالی باشد'
    } else if (fieldName === 'email' && !isValidEmail(value)) {
      error = 'لطفا یک ایمیل معتبر وارد کنید'
    } else if (fieldName === 'phoneNumber' && !isValidPhone(value)) {
      error = 'شماره موبایل وارد شده اشتباه است'
    }
    return error
  }

  const validateForm = () => {
    const newErrors = {}
    fieldsToValidate.forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })
    setErrors(newErrors)
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    const formErrors = validateForm()

    if (Object.keys(formErrors).length === 0) {
      console.log(formData)
      // Your form submission logic here
    }
  }

  const inputClass = (fieldName) => `
    mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring 
    ${errors[fieldName] ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-400'}
  `

  const ErrorMessage = ({ error }) => (
    <p className="mt-1 text-right text-sm text-red-500 transition-all duration-300 ease-in-out">{error}</p>
  )

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full px-5 py-8 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm text-right font-medium text-gray-700">
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass('email')}
        />
        {errors.email && <ErrorMessage error={errors.email} />}
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-right text-sm font-medium text-gray-700">
          اسم
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass('name')}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm text-right font-medium text-gray-700">
          شماره تماس
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={inputClass('phoneNumber')}
          onInput={(event) => {
            event.target.value = changeToEngNum(event.target.value)
          }}
        />
        {errors.phoneNumber && <ErrorMessage error={errors.phoneNumber} />}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  )
}

export default SignInForm

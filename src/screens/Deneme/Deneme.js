import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from "./Deneme.style";
import Button from "~/components/Button";
import Input from "~/components/Input";

const initialFormValues = {
  author: '',
  bookName: '',
  category: '',
  image: '',
  interpreter: '',
  language: '',
  isbn: '',
  pages: '',
  price: '',
  publicationDate: '',
  publisher: '',
  text: '',
  title: '',
};

const Deneme = () => {


  async function handleFormSubmit(formValues) {
    console.log(formValues);
    database().ref('Data/').push(formValues);
  }

  return (
    <SafeAreaView style={styles.container}>

      <Formik
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Input placeholder="Author" value={values.author} onType={handleChange('author')} iconName="bookmark" />
            <Input placeholder="Book Name" value={values.bookName} onType={handleChange('bookName')} iconName="book" />
            <Input placeholder="Category" value={values.category} onType={handleChange('category')} iconName="bookmark" />
            <Input placeholder="Image url input" value={values.image} onType={handleChange('image')} iconName="image" />
            <Input placeholder="Interpreter" value={values.interpreter} onType={handleChange('interpreter')} iconName="bookmark" />
            <Input placeholder="Isbn" value={values.isbn} onType={handleChange('isbn')} iconName="bookmark" />
            <Input placeholder="Language" value={values.language} onType={handleChange('language')} iconName="language" />
            <Input placeholder="Pages" value={values.pages} onType={handleChange('pages')} iconName="bookmark" />
            <Input placeholder="Price" value={values.price} onType={handleChange('price')} iconName="bookmark" />
            <Input placeholder="Publication Date" value={values.publicationDate} onType={handleChange('publicationDate')} iconName="bookmark" />
            <Input placeholder="Publisher" value={values.publisher} onType={handleChange('publisher')} iconName="publisher" />
            <Input placeholder="Text" value={values.text} onType={handleChange('text')} iconName="text" />
            <Input placeholder="Title" value={values.title} onType={handleChange('title')} iconName="title" />

            <Button text="Add" onPress={handleSubmit} loading={loading} theme='secondary' />
          </>)}
      </Formik>

    </SafeAreaView>
  )
}


export default Deneme;
import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { firebaseProductsListener, requestAddProductToFirebase,  requestGetAllPRoductsFromFirebase, setApp } from '~/redux/actions';

import styles from "./AddBook.style";
import Button from "~/components/Button";
import Input from "~/components/Input";

const initialFormValues = {
  image: "https://i.idefix.com/cache/500x400-0/originals/0000000314967-1.jpg",
  bookName: "Biyografya 5- Adnan Saygun",
  author: "Ay\u015feg\u00fcl Yaraman",
  publisher: "Ba\u011flam Yay\u0131nc\u0131l\u0131k",
  price: "42,0 TL",
  title: "Biyografya 5- Adnan Saygun Kitap A\u00e7\u0131klamas\u0131",
  text: "\nSunu\u015f Ali ErgurKronoloji Yasemin Esra Do\u011fanc\u0131Hocam Saygun'dan An\u0131lar G\u00fclsin ONAYAhmed Adnan Saygun'un Ya\u015fam\u00f6yk\u00fcs\u00fc ile Besteci ve M\u00fczikolog KimlikleriYi\u011fit AYDINAhmed Adnan Saygun'un Folklor ve Etnom\u00fczikoloji \u00c7al\u0131\u015fmalar\u0131 \u00dczerine Melih DUYGULUBart\u00f6k, d'Indy ve Schola Cantorum Adnan Saygun'un Etkisinde Kald\u0131\u011f\u0131M\u00fczik Adamlar\u0131 ve Ak\u0131mlar\u0131- Emre ARACISaygun'un Yap\u0131tlar\u0131nda Modal ya daMakamsal Etmen- \u00d6nder K\u00fctahyal\u0131Rengim G\u00f6kmen'le S\u00f6yle\u015fi - Yi\u011fit Ayd\u0131nYunus Emre Oratoryosu 'mm Olu\u015fum S\u00fcreci - Esin UluMuammer Sun \u0130le S\u00f6yle\u015fi - Yi\u011fit Ayd\u0131n, Ali ErgurHalit Refi\u011f ve G\u00fclper Refi\u011f ile S\u00f6yle\u015fi - Ali ErgurM\u00fczikte Doruklar- G\u00fclper Refi\u011f",
  pages: "231",
  dimensons: "",
  publicationDate: "2009",
  language: "T\u00fcrk\u00e7e",
  category: "Biyografi",
  isbn: "9789758803248"
  ,
  interpreter: "Yok",
  id: "",
};

const SignupSchema = Yup.object().shape({
  author: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  bookName: Yup.string().min(2, 'Too Short!').max(80, 'Too Long!').required('Required'),
  category: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  interpreter: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  isbn: Yup.string().min(8, 'Too Short!').max(15, 'Too Long!').required('Required'),
  image: Yup.string().url('Invalid Url').required('Required'),
});

const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const AddBook = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { app, dispatch } = props;

  const handleFormSubmit = formValues => {
    formValues.id = formValues.isbn;
    dispatch(requestAddProductToFirebase(formValues));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={SignupSchema} >
        {({ values, handleChange, handleSubmit,errors }) => (<>
          <ScrollView>
            <Button text="Add" onPress={handleSubmit} theme='secondary' />
            <Input placeholder="Author" value={values.author} onChangeText={handleChange('author')} iconName="bookmark" />
              {errors.author && (<Text>{errors.author}</Text>)}
            <Input placeholder="Book Name" value={values.bookName} onChangeText={handleChange('bookName')} iconName="bookmark" />
              {errors.bookName && (<Text>{errors.bookName}</Text>)}
            <Input placeholder="Category" value={values.category} onChangeText={handleChange('category')} iconName="bookmark" />
              {errors.category && (<Text>{errors.category}</Text>)}
            <Input placeholder="Image url input" value={values.image} onChangeText={handleChange('image')} iconName="bookmark" />
              {errors.image && (<Text>{errors.image}</Text>)}
            <Input placeholder="Interpreter" value={values.interpreter} onChangeText={handleChange('interpreter')} iconName="bookmark" />
            <Input placeholder="Isbn" value={values.isbn} onChangeText={handleChange('isbn')} iconName="bookmark" />
              {errors.isbn && (<Text>{errors.isbn}</Text>)}
            <Input placeholder="Language" value={values.language} onChangeText={handleChange('language')} iconName="bookmark" />
            <Input placeholder="Pages" value={values.pages} onChangeText={handleChange('pages')} iconName="bookmark" />
            <Input placeholder="Price" value={values.price} onChangeText={handleChange('price')} iconName="bookmark" />
            <Input placeholder="Publication Date" value={values.publicationDate} onChangeText={handleChange('publicationDate')} iconName="bookmark" />
            <Input placeholder="Publisher" value={values.publisher} onChangeText={handleChange('publisher')} iconName="bookmark" />
            <Input placeholder="Text" value={values.text} onChangeText={handleChange('text')} iconName="bookmark" />
            <Input placeholder="Title" value={values.title} onChangeText={handleChange('title')} iconName="bookmark" />
          </ScrollView>
        </>)}
      </Formik>

    </SafeAreaView>
  )
});


export default AddBook;
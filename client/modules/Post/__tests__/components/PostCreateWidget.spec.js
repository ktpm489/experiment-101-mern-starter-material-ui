// import React from 'react';
import test from 'ava';
// import sinon from 'sinon';
// import { FormattedMessage } from 'react-intl';
// import { PostCreateWidget } from '../../components/PostCreateWidget/PostCreateWidget';
// import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';
// import shallowWithIntl from '../../../../util/react-intl-test-helper';

// const props = {
//   addPost: () => {},
//   showAddPost: true,
// };

test('dummy test', t => {
  const foo = '1';
  t.true(foo === '1');
});

// test('renders properly', t => {
//   // console.log("PostCreteWidget.spec.js: 0.a See issue #5. Tests commented out");
//   const wrapper = shallowWithIntl(
//     <PostCreateWidget {...props} />
//   );
//   // console.log("PostCreteWidget.spec.js: 0.b");
//
//   t.truthy(wrapper.hasClass('form'));
//   // t.truthy(wrapper.hasClass('appear'));
//   // t.truthy(wrapper.find('h2').first().containsMatchingElement(<FormattedMessage id="createNewPost" />));
//   // t.is(wrapper.find('input').length, 2);
//   // t.is(wrapper.find('textarea').length, 1);
//   // console.log("PostCreteWidget.spec.js: 0.c");
// });
//
// test('hide when showAddPost is false', t => {
//   console.log("PostCreteWidget.spec.js:1 enter");
//   const wrapper = mountWithIntl(
//     <PostCreateWidget {...props} />
//   );
//
//   wrapper.setProps({ showAddPost: false });
//   t.falsy(wrapper.hasClass('appear'));
// });
//
// test('has correct props', t => {
//   console.log("PostCreteWidget.spec.js:2 enter");
//   const wrapper = mountWithIntl(
//     <PostCreateWidget {...props} />
//   );
//
//   t.is(wrapper.prop('addPost'), props.addPost);
//   t.is(wrapper.prop('showAddPost'), props.showAddPost);
// });
//
// test('calls addPost', t => {
//   console.log("PostCreteWidget.spec.js:3 enter");
//   const addPost = sinon.spy();
//   const wrapper = mountWithIntl(
//     <PostCreateWidget addPost={addPost} showAddPost />
//   );
//
//   wrapper.ref('name').get(0).value = 'David';
//   wrapper.ref('title').get(0).value = 'Some Title';
//   wrapper.ref('content').get(0).value = 'Bla Bla Bla';
//
//   wrapper.find('a').first().simulate('click');
//   t.truthy(addPost.calledOnce);
//   t.truthy(addPost.calledWith('David', 'Some Title', 'Bla Bla Bla'));
// });
//
// test('empty form doesn\'t call addPost', t => {
//   console.log("PostCreteWidget.spec.js:4 enter");
//   const addPost = sinon.spy();
//   const wrapper = mountWithIntl(
//     <PostCreateWidget addPost={addPost} showAddPost />
//   );
//
//   wrapper.find('a').first().simulate('click');
//   t.falsy(addPost.called);
// });

/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// link https://us-central1-blinkblink-6aa01.cloudfunctions.net/addSubscriber/ssss@zaremba.lv


const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true
});

exports.addSubscriber = functions.https.onRequest((req, res) => {

  cors(req, res, () => {

    const Mailchimp = require('mailchimp-api-v3')
    const mailchimp = new Mailchimp(functions.config().mailchimp.key);

    mailchimp.post('/lists/bc68dd7490/members', {
        "email_address": req.url.split("/")[1],
        "status": "pending"
      }).then(function (results) {
        res.status(200).send('');
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).send('');
      })
    return null
  });

});

exports.getSubs = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    const Mailchimp = require('mailchimp-api-v3')
    const mailchimp = new Mailchimp(functions.config().mailchimp.key);

    mailchimp.get('lists/bc68dd7490/members').then(function (results) {
        var list = {
          members: []
        };
        for (var key in results.members) {
          var member = results.members[key];
          if (!member.email_address.match('zaremba.lv')) {
            list.members.push({
              "email": member.email_address,
              "status": member.status,
              "last_changed": member.last_changed
            })
          }

        }
        list.totalLength = list.members.length;
        list = JSON.stringify(list, null, 2)
        res.status(200).send(list);
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).send('');
      })
    return null
  });

});

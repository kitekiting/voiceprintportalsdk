var siv = (function() {
	var host = window.location.protocol + "//" + window.location.host;

	return {
		name : "SIV",
		version : "1.0z",
		copyright : "Copyright © 2013 VoiceIt Technologies, LLC.",

		createUser : function(email, password, developerId, firstName, lastName, phone1, phone2, phone3, onSuccess, onError) {
			$.ajax({
				type : 'POST',
				url : host + '/sivservice/api/users',
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId,
					'VsitFirstName' : firstName,
					'VsitLastName' : lastName,
					'VsitPhone1' : phone1,
					'VsitPhone2' : phone2,
					'VsitPhone3' : phone3
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		deleteUser : function(email, password, developerId, onSuccess, onError) {
			$.ajax({
				type : 'DELETE',
				url : host + '/sivservice/api/users',
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		deleteUserByToken : function(email, developerId, token, onSuccess, onError) {
			$.ajax({
				type : 'DELETE',
				url : host + '/sivservice/api/users/deletebytoken',
				headers : {
					'VsitEmail' : email,
					'CurrentDeveloperId' : developerId,
					'Token' : token
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		getUser : function(email, password, developerId, onSuccess, onError) {
			$.ajax({
				type : 'GET',
				url : host + '/sivservice/api/users',
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		setUser : function(email, password, developerId, firstName, lastName, phone1, phone2, phone3, onSuccess, onError) {
			$.ajax({
				type : 'PUT',
				url : host + '/sivservice/api/users',
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId,
					'VsitFirstName' : firstName,
					'VsitLastName' : lastName,
					'VsitPhone1' : phone1,
					'VsitPhone2' : phone2,
					'VsitPhone3' : phone3
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		setUserByToken : function(email, password, developerId, token, firstName, lastName, phone1, phone2, phone3, onSuccess, onError) {
			if (password.length == 0) {
				$.ajax({
					type : 'PUT',
					url : host + '/sivservice/api/users/updatebytoken',
					headers : {
						'VsitEmail' : email,
						'VsitPassword' : "",
						'CurrentDeveloperId' : developerId,
						'Token' : token,
						'VsitFirstName' : firstName,
						'VsitLastName' : lastName,
						'VsitPhone1' : phone1,
						'VsitPhone2' : phone2,
						'VsitPhone3' : phone3
					}
				}).success(function(data) {
					onSuccess(data);
				}).error(function(jqXHR, textStatus, errorThrown) {
					onError(jqXHR, textStatus, errorThrown);
				});
			} else {
				$.ajax({
					type : 'PUT',
					url : host + '/sivservice/api/users/updatebytoken',
					headers : {
						'VsitEmail' : email,
						'VsitPassword' : CryptoJS.SHA256(password),
						'CurrentDeveloperId' : developerId,
						'Token' : token,
						'VsitFirstName' : firstName,
						'VsitLastName' : lastName,
						'VsitPhone1' : phone1,
						'VsitPhone2' : phone2,
						'VsitPhone3' : phone3
					}
				}).success(function(data) {
					onSuccess(data);
				}).error(function(jqXHR, textStatus, errorThrown) {
					onError(jqXHR, textStatus, errorThrown);
				});
			}
		},

		getLoggingsByToken : function(email, developerId, token, onSuccess, onError) {
			$.ajax({
				type : 'GET',
				url : host + '/sivservice/api/authentications/getlogbytoken',
				headers : {
					'VsitEmail' : email,
					'CurrentDeveloperId' : developerId,
					'Token' : token
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		getEnrollments : function(email, password, developerId, onSuccess, onError) {
			$.ajax({
				type : 'GET',
				url : host + '/sivservice/api/enrollments',
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		getEnrollmentsByToken : function(email, developerId, token, getdatestr, onSuccess, onError) {
			$.ajax({
				type : 'GET',
				url : host + '/sivservice/api/enrollments/getbytoken',
				headers : {
					'VsitEmail' : email,
					'CurrentDeveloperId' : developerId,
					'Token' : token,
					'GetDateStr' : getdatestr,
					'EnrollmentID' : 0
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		getEnrollmentDateTimeByToken : function(email, developerId, token, getdatestr, EnrollID, onSuccess, onError) {
			$.ajax({
				type : 'GET',
				url : host + '/sivservice/api/enrollments/getbytoken',
				headers : {
					'VsitEmail' : email,
					'CurrentDeveloperId' : developerId,
					'Token' : token,
					'GetDateStr' : getdatestr,
					'EnrollmentID' : EnrollID
				}
			}).success(function(data) {
				onSuccess(data, EnrollID);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		createEnrollment : function(email, password, developerId, wav, onSuccess, onError) {
			$.ajax({
				type : 'POST',
				url : host + '/sivservice/api/enrollments',
				contentType : 'audio/wav',
				data : wav,
				processData : false,
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		createEnrollmentByWavUrl : function(wavurl, email, password, developerId, onSuccess, onError) {
			$.ajax({
				type : 'POST',
				url : host + '/sivservice/api/enrollments/bywavurl',
				headers : {
					'VsitWavURL' : wavurl,
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		deleteEnrollment : function(email, password, developerId, enrollment, onSuccess, onError) {
			$.ajax({
				type : 'DELETE',
				url : host + '/sivservice/api/enrollments/' + enrollment,
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		deleteEnrollmentByToken : function(email, developerId, token, enrollment, onSuccess, onError) {
			$.ajax({
				type : 'DELETE',
				url : host + '/sivservice/api/enrollments/deletebytoken/' + enrollment,
				headers : {
					'VsitEmail' : email,
					'CurrentDeveloperId' : developerId,
					'Token' : token
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		authentication : function(email, password, developerId, accuracy, confidence, wav, accuracyPasses, accuracyPassIncrement, onSuccess, onError) {
			$.ajax({
				type : 'POST',
				url : host + '/sivservice/api/authentications',
				contentType : 'audio/wav',
				data : wav,
				processData : false,
				headers : {
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId,
					'VsitAccuracy' : accuracy,
					'VsitConfidence' : confidence,
					'VsitAccuracyPasses' : accuracyPasses,
					'VsitAccuracyPassIncrement' : accuracyPassIncrement
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		authenticationByWavUrl : function(wavurl, email, password, developerId, accuracy, confidence, accuracyPasses, accuracyPassIncrement, onSuccess, onError) {
			$.ajax({
				type : 'POST',
				url : host + '/sivservice/api/authentications/bywavurl',
				headers : {
					'VsitWavURL' : wavurl,
					'VsitEmail' : email,
					'VsitPassword' : CryptoJS.SHA256(password),
					'VsitDeveloperId' : developerId,
					'VsitAccuracy' : accuracy,
					'VsitConfidence' : confidence,
					'VsitAccuracyPasses' : accuracyPasses,
					'VsitAccuracyPassIncrement' : accuracyPassIncrement
				}
			}).success(function(data) {
				onSuccess(data);
			}).error(function(jqXHR, textStatus, errorThrown) {
				onError(jqXHR, textStatus, errorThrown);
			});
		},

		playAudio : function(fileName, onEnded) {
			var audio = new Audio(fileName);
			audio.addEventListener('ended', function() {
				onEnded();
			}, true);
			audio.play();
		},

		playVoiceprint : function(onEnded) {
			playAudio("beforeenrollmentbeep.wav", function() {
				onEnded();
			});
		},

		createWav : function(sampleRate, data) {

			function floatTo16BitPCM(output, offset, input) {
				for (var i = 0; i < input.length; ++i, offset += 2) {
					s = input[i];
					output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
				}
			}

			function writeString(view, offset, string) {
				for (var i = 0; i < string.length; ++i)
					view.setUint8(offset + i, string.charCodeAt(i));
			}

			var buffer = new ArrayBuffer(44 + 2 * data.length);
			var view = new DataView(buffer);
			writeString(view, 0, 'RIFF');
			view.setUint32(4, 32 + 2 * data.length, true); // file length
			writeString(view, 8, 'WAVE');
			writeString(view, 12, 'fmt ');
			view.setUint32(16, 16, true); // chunk length
			view.setUint16(20, 1, true); // audio format PCM
			view.setUint16(22, 1, true); // channel count
			view.setUint32(24, sampleRate, true); // sample rate
			view.setUint32(28, sampleRate * 2, true); // byte rate (sample
			// rate * block align)
			view.setUint16(32, 2, true); // block align (channel count *
			// bytes per sample)
			view.setUint16(34, 16, true); // bits per sample
			writeString(view, 36, 'data'); // data chunk identifier
			view.setUint32(40, 2 * data.length, true); // data chunk length
			floatTo16BitPCM(view, 44, data);
			return view;
		}
	};
})();